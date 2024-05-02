// // frontend/src/Dashboard.js
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase-config";
// import QRCode from "qrcode.react";

// function Dashboard() {
//   const [user, loading, error] = useAuthState(auth);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!user) {
//     return <div>User not authenticated</div>;
//   }

//   const qrData = User ID: ${user.uid}\nEmail: ${user.email};

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl">Dashboard</h1>
//       <div>
//         <p>Email: {user.email}</p>
//         <QRCode value={qrData} size={128} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;