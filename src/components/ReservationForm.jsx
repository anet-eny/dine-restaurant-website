import Button from "./Button";
import { PADDING } from "../utils/constants";
import { useReservationForm } from "../hooks/useReservationForm";
import iconArrow from "../assets/icons/icon-arrow.svg";
import iconCheck from "../assets/icons/icon-check.svg";
import iconMinus from "../assets/icons/icon-minus.svg";
import iconPlus from "../assets/icons/icon-plus.svg";

const ReservationForm = ({
  buttonText,
  peopleOptions,
  defaultPeople,
  fields,
}) => {
  const initialValues = {
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hours: "",
    minutes: "",
    period: "AM",
    people: defaultPeople,
  };

  const requiredFields = [
    "name",
    "email",
    "month",
    "day",
    "year",
    "hours",
    "minutes",
  ];

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    updateField,
  } = useReservationForm(initialValues, requiredFields);

  const handlePeopleChange = (increment) => {
    const currentIndex = peopleOptions.indexOf(formData.people);
    const newIndex = currentIndex + increment;
    if (newIndex >= 0 && newIndex < peopleOptions.length) {
      updateField("people", peopleOptions[newIndex]);
    }
  };

  const onSubmitSuccess = (data) => {
    console.log("Form submitted:", data);
    // API call zde
  };

  return (
    <section
      id="reservation-form"
      className="bg-white py-20"
      style={{ paddingInline: PADDING }}
    >
      <div className="max-w-xl mx-auto bg-white reservation-form-text shadow-2xl p-8 md:p-12">
        <form
          onSubmit={handleSubmit(onSubmitSuccess)}
          className="flex flex-col gap-8"
        >
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder={fields.name.placeholder}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-b-2 ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:border-gray-900 transition-colors`}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder={fields.email.placeholder}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-b-2 ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:border-gray-900 transition-colors`}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Date Picker */}
          <div className="md:flex md:items-center md:justify-between md:gap-2">
            <div className="md:w-1/3 mb-3 md:mb-0">
              <label className="block md:inline-block  md:whitespace-nowrap">
                {fields.date.label}
              </label>
              {(errors.month || errors.day || errors.year) &&
                (touched.month || touched.day || touched.year) && (
                  <p className="text-red-500 text-xs mt-1">
                    This field is incomplete
                  </p>
                )}
            </div>
            <div className="flex md:w-2/3 gap-4">
              <input
                type="text"
                name="month"
                placeholder="MM"
                maxLength="2"
                value={formData.month}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-1/3 px-4 py-3 border-b-2 text-center ${
                  errors.month && touched.month
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-gray-900 transition-colors`}
              />
              <input
                type="text"
                name="day"
                placeholder="DD"
                maxLength="2"
                value={formData.day}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-1/3 px-4 py-3 border-b-2 text-center ${
                  errors.day && touched.day
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-gray-900 transition-colors`}
              />
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                maxLength="4"
                value={formData.year}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-1/3 px-4 py-3 border-b-2 text-center ${
                  errors.year && touched.year
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-gray-900 transition-colors`}
              />
            </div>
          </div>

          {/* Time Picker */}
          <div className="md:flex md:items-center md:justify-between md:gap-2">
            <div className="md:w-1/3 mb-3 md:mb-0">
              <label className="block md:inline-block md:whitespace-nowrap">
                {fields.time.label}
              </label>
              {(errors.hours || errors.minutes) &&
                (touched.hours || touched.minutes) && (
                  <p className="text-red-500 text-xs mt-1">
                    This field is incomplete
                  </p>
                )}
            </div>
            <div className="flex md:w-2/3 gap-4 items-center">
              <input
                type="text"
                name="hours"
                placeholder="09"
                maxLength="2"
                value={formData.hours}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-1/3 px-4 py-3 border-b-2 text-center ${
                  errors.hours && touched.hours
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-gray-900 transition-colors`}
              />
              <input
                type="text"
                name="minutes"
                placeholder="00"
                maxLength="2"
                value={formData.minutes}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-1/3 px-4 py-3 border-b-2 text-center ${
                  errors.minutes && touched.minutes
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-gray-900 transition-colors`}
              />
              <select
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="w-1/3 px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-colors appearance-none cursor-pointer"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* People Counter */}
          <div className="flex items-center justify-between border-b-2 border-gray-300 gap-6 py-4">
            <button
              type="button"
              onClick={() => handlePeopleChange(-1)}
              disabled={formData.people === peopleOptions[0]}
              className="px-6 py-2 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <img src={iconMinus} alt="Decrease" className="w-3" />
            </button>
            <span className="tracking-[.016em] leading-6 font-bold">
              {formData.people} {formData.people === 1 ? "person" : "people"}
            </span>
            <button
              type="button"
              onClick={() => handlePeopleChange(1)}
              disabled={
                formData.people === peopleOptions[peopleOptions.length - 1]
              }
              className="px-6 py-2 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <img src={iconPlus} alt="Increase" className="w-3" />
            </button>
          </div>

          {/* Submit Button */}
          <Button type="submit" theme="dark">
            {buttonText}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
