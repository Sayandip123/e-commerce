import Layout from "./Layout";
import firbaseConfigapp from "../../util/firebase-config";

import { FaUser } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getFirestore(firbaseConfigapp);

export default function Profile() {
  const navigate = useNavigate();
  const auth = getAuth(firbaseConfigapp);

  const [value, setValue] = useState({
    fullname: "",
    email: "",
    mobile: "",
    area: "",
    city: "",
    pin: "",
    landmark: "",
    userId: "",
  });
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Listen for authentication changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
        setValue((prev) => ({ ...prev, userId: user.uid }));
      } else {
        setSession(false);
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  useEffect(() => {
    if (session) {
      const fetchAddresses = async () => {
        try {
          const datas = collection(db, "addresses");
          const q = query(datas, where("userId", "==", session.uid));
          const man = await getDocs(q);
          man.forEach((docs) => {
            console.log(docs.data());
          });
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      };

      fetchAddresses();
    }
  }, [session]);

  // Handle input change
  function handle(e) {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  }

  // Upload profile image
  async function setProfile(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`profile-images/${session.uid}`);
      await fileRef.put(file);
      const photoURL = await fileRef.getDownloadURL();
      console.log("Photo URL:", photoURL);
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload profile image");
      console.error(error);
    }
  }

  // Save address
  async function save(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "addresses"), { ...value });
      toast.success("Address added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to add address", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error(error);
    }
  }

  // Show loading state
  if (session === null) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="w-full max-w-sm rounded-md border bg-gray-700 border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="mx-auto border-2 p-5 text-center mt-10 w-[80%] shadow-lg flex flex-col justify-center gap-3 font-semibold items-center">
          <FaUser /> Profile
          <hr />
          <div className="relative rounded-full border-2 object-cover">
            <img
              className="h-20 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwGub6dzbO-T9reIbMngRj8jFqy57J0uZHA&s"
              alt="Profile"
            />
            <input
              onChange={setProfile}
              className="absolute w-full h-full opacity-0 top-0 left-0"
              type="file"
              accept="images/*"
            />
          </div>
          <form className="grid grid-cols-2 gap-2 font-medium">
            {[
              { label: "Full Name", name: "fullname", type: "text", placeholder: "Enter full name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
              { label: "Mobile", name: "mobile", type: "number", placeholder: "Enter mobile" },
              { label: "City", name: "city", type: "text", placeholder: "Enter city" },
              { label: "Area/Street/Colony", name: "area", type: "text", placeholder: "Enter area/street", colSpan: true },
              { label: "PinCode", name: "pin", type: "number", placeholder: "Enter pin code" },
              { label: "Landmark", name: "landmark", type: "text", placeholder: "Enter landmark" },
            ].map((input, index) => (
              <label key={index} className={`flex-col flex ${input.colSpan ? "col-span-2" : ""}`}>
                {input.label}
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={value[input.name]}
                  onChange={handle}
                  className="rounded-md border-2 p-2 font-normal"
                />
              </label>
            ))}
          </form>
          <button onClick={save} className="mx-auto bg-orange-600 p-2 rounded-md text-sm text-white px-3">
            Save
          </button>
        </div>
        <ToastContainer />
      </Layout>
    </>
  );
}
