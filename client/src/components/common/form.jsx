// function Commonform({formControls}) {

import { useState } from "react";

//     return (
//         <form>
//             <div className="flex flex-col gap-3">
//                 {

//                 }
//             </div>
//         </form>
//      );
// }

// export default Commonform;

function CommonForm({ formControls, onSubmit }) {
  const [formValues, setFormValues] = useState(
    formControls.reduce((acc, control) => {
      acc[control.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form values to the parent component (AuthPage)
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 w-full ">
        {formControls.map((control, index) => (
          <div key={index} className="flex flex-col w-full ">
            <label className="mb-2 flex font-semibold " htmlFor={control.name}>
              {control.label}
            </label>

            {control.componentType === "input" && (
              <input
                id={control.name}
                name={control.name}
                type={control.type}
                placeholder={control.placeholder}
                value={formValues[control.name]}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded bg-blue-100 "
              />
            )}

            {control.componentType === "textarea" && (
              <textarea
                id={control.name}
                name={control.name}
                placeholder={control.placeholder}
                value={formValues[control.name]}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
            )}

            {control.componentType === "select" && (
              <select
                id={control.name}
                name={control.name}
                value={formValues[control.name]}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              >
                {control.options.map((option, optIndex) => (
                  <option key={optIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommonForm;
