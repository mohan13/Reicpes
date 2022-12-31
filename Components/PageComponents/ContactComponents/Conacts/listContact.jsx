import React from "react";
import { ConatactList, ConatctList } from "./ContactList";
const listContact = () => {
  return (
    <div class=" bg-white flex flex-col md:py-8 mt-8 md:mt-0">
      {ConatctList?.map((val, i) => {
        return (
          <div key={i}>
            <div class="mb-4">
              <input
                type={val.type}
                placeholder={val.placeholder}
                name={val.name}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        );
      })}
      <div class="relative mb-4">
        <textarea
          placeholder="Message"
          name="message"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div class="text-yellow-400 w-44 mb-8  border-yellow-400 border py-2 px-6 focus:outline-none hover:bg-yellow-400 hover:text-white rounded text-md">
        SEND MESSAGE
      </div>
    </div>
  );
};

export default listContact;
