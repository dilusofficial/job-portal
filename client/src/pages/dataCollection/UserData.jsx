import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { useAddUserDetailsMutation } from "../../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../slices/allUsersSlice";

export default function UserData() {
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [interest, setInterest] = useState("");
  const [gender, setGender] = useState("Male");
  const [smoking, setSmoking] = useState("Often");
  const [drinking, setDrinking] = useState("Often");
  const [address, setAddress] = useState("");
  const [highestQualification, setHighestQualification] =
    useState("High School");
  const [addUserDetails, { isLoading }] = useAddUserDetailsMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSave = async () => {
    try {
      const res = await addUserDetails({
        age,
        dateOfBirth,
        image,
        hobbies,
        interest,
        gender,
        smoking,
        drinking,
        address,
        highestQualification,
      }).unwrap();
      if (res.msg === "details added successfully") {
        setAge("");
        setAddress("");
        setDateOfBirth("");
        setDrinking("Often");
        setSmoking("Often");
        setHighestQualification("High School");
        setImage("");
        setHobbies("");
        setInterest("");
        setGender("Male");
        dispatch(setUserInfo(res.user));
        navigate("/choose");
        toast.success("successfully added");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="p-4 bg-secondary lg:w-1/2 rounded-lg mt-3">
        <h1 className="my-3 text-xl">Fill your Details</h1>
        <FormInput
          title={"Age"}
          type={"number"}
          value={age}
          onchange={(e) => setAge(e.target.value)}
          placeholder={"Enter your age"}
        />
        <FormInput
          title={"date of Birth"}
          type={"date"}
          value={dateOfBirth}
          onchange={(e) => setDateOfBirth(e.target.value)}
        />
        <FormInput
          type={"file"}
          title={"Profile Picture"}
          value={image}
          onchange={(e) => setImage(e.target.value)}
        />
        <FormInput
          title={"Hobbies"}
          type={"text"}
          value={hobbies}
          onchange={(e) => setHobbies(e.target.value)}
          placeholder={"Reading, Movies, Music"}
        />
        <FormInput
          title={"Interest"}
          type={"text"}
          value={interest}
          onchange={(e) => setInterest(e.target.value)}
          placeholder={"Coding, teaching"}
        />
        <FormSelect
          title={"Gender"}
          list={["Male", "Female"]}
          value={gender}
          onchange={(e) => setGender(e.target.value)}
        />
        <FormSelect
          title={"Smoking"}
          list={["Often", "Occational", "Never"]}
          value={smoking}
          onchange={(e) => setSmoking(e.target.value)}
        />
        <FormSelect
          title={"Drinking"}
          value={drinking}
          onchange={(e) => setDrinking(e.target.value)}
          list={["Often", "Occational", "Never"]}
        />
        <FormSelect
          title={"Qualification"}
          value={highestQualification}
          onchange={(e) => setHighestQualification(e.target.value)}
          list={[
            "High School",
            "Higher Secondary",
            "Diploma",
            "Bachelors Degree",
            "Masters Degree",
            "Doctorate",
          ]}
        />
        <div className="form-row">
          <label htmlFor="address" className="form-label">
            Current Adrress
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={5}
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
