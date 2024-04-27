import * as yup from "yup";

export const ReservationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  count: yup.number().max(10).required("Number of guests is required"),
  tables: yup
    .string()
    .oneOf(
      [
        "Table 1",
        "Table 2",
        "Table 3",
        "Table 4",
        "Table 5",
        "Table 6",
        "Table 7",
        "Table 8",
        "Table 9",
        "Table 10",
      ],
      "Select between 1 - 10 table "
    ),
  dates: yup.object().shape({
    day: yup.string().required("Date is required"),
    hour: yup
      .string()
      .oneOf(
        [
          "12:00 AM",
          "12:30 AM",
          "1:00 AM",
          "1:30 AM",
          "2:00 AM",
          "2:30 AM",
          "3:00 AM",
          "3:30 AM",
          "4:00 AM",
          "4:30 AM",
          "5:00 AM",
          "5:30 AM",
          "6:00 AM",
          "6:30 AM",
          "7:00 AM",
          "7:30 AM",
          "8:00 AM",
          "8:30 AM",
          "9:00 AM",
          "9:30 AM",
          "10:00 AM",
          "10:30 AM",
          "11:00 AM",
          "11:30 AM",
          "12:00 PM",
          "12:30 PM",
          "1:00 PM",
          "1:30 PM",
          "2:00 PM",
          "2:30 PM",
          "3:00 PM",
          "3:30 PM",
          "4:00 PM",
          "4:30 PM",
          "5:00 PM",
          "5:30 PM",
          "6:00 PM",
          "6:30 PM",
          "7:00 PM",
          "7:30 PM",
          "8:00 PM",
          "8:30 PM",
          "9:00 PM",
          "9:30 PM",
          "10:00 PM",
          "10:30 PM",
          "11:00 PM",
          "11:30 PM",
        ],
        "Invalid hour format"
      )
      .required("Time is required"),
  }),
});
