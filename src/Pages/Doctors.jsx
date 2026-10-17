import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { doctors } from "../assets/assets";
const Doctors = () => {
  // useParams() used to extract values from URL parameters.
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(Doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors);
    }x
  }
  // used to perform side Effects in function to  interact with outside world;
useEffect(()=>{
  applyFilter();
},[doctors,speciality])

  const { Doctors } = useContext(AppContext);
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynologist</p>
          <p>Dermatologist</p>
          <p>Pedatricans</p>
          <p>Neurologist</p>
          <p>Gastrologist</p>
        </div>
      </div>
      <div>
        {filterDoc.map((item, index) => (
          <div
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
          >
            <img
              className="bg-blue-50 w-full h-auto object-cover "
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <div
                className="w-1/2 flex
               items-center gap-2 text-sm text-center text-green-500"
              >
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
