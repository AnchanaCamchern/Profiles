function App() {
  const name = 'SunnyJ🌤️🎄';
  const githubUrl = 'https://github.com/AnchanaCamchern/Profiles';
  const discordUsername = '@Signjjyd';
  const imageUrl = `https://i.pinimg.com/originals/01/9a/ed/019aed22e90a64b3fdbb0f1bec78441c.png`;
  const bgImage =`https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm283-nunny-186-g.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=316a67df9b5b93c21ebd8dff4e81c889`
  const email = `sign.ac@odds.team`;
  const phone = `+(66) 585-XXXX`;
  
  const sectionStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 w-full" style={sectionStyle}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white p-10 rounded-xl">
        <div>
          <img
            src={imageUrl}
            alt="Profile"
            className="w-60 h-50 object-cover rounded-full border-4 border-blue-200 mb-10 md:mb-0 md:mr-10"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">{`My name is ${name}.`}</h2>
          <h5 className="text-gray-500 mb-2 flex"><strong>Discord:</strong><p className="text-blue-500 ml-2 mb-4">{discordUsername}</p></h5>
          <h5 className="text-gray-500 mb-2 flex"><strong>Github:</strong><a href={githubUrl} className="text-blue-500 ml-2 mb-4">{githubUrl}</a></h5>
          <h5 className="text-gray-500 mb-2"><strong>About me</strong></h5>
          <p className="text-xl text-gray-500 mb-4">
            Travelling and seeing the world with my mom,<br />  was a wonderful experience for me.
          </p>
        </div>
      </div>
      <footer className="w-full mt-40">
  <div className="flex justify-between bg-white p-10 rounded-xl">
    <div>
      <h5 className="text-gray-500 mb-2">
        <img src="https://i.pinimg.com/originals/39/4b/0b/394b0b25f7b460941dfaa149e20d532e.jpg" alt="Phone" className="inline w-6 h-6 mr-2" />
        Phone
      </h5>
      <p className="text-blue-500">{phone}</p>
    </div>
    <div></div>
    <div>
      <h5 className="text-gray-500 mb-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhgVMRyxuQvv2dZEDVls9Zbt2qXsaqPBQzA&usqp=CAU" alt="Message" className="inline w-6 h-6 mr-2" />
        Drop your message
      </h5>
      <p className="text-blue-500">{email}</p>
    </div>
  </div>
</footer>
    </section>
  );
}

export default App;



// function App() {
//   const name = 'SunnyJ🌤️🎄';
//   const githubUrl = 'https://github.com/AnchanaCamchern/Profiles';
//   const discordUsername = '@Signjjyd';
//   const imageUrl = `https://i.pinimg.com/originals/01/9a/ed/019aed22e90a64b3fdbb0f1bec78441c.png`;
//   const email = `sign.ac@odds.team`;
//   const phone = `+(66) 585-XXXX`;
  
//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 w-full">
//       <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white p-10 rounded-xl">
//         <div>
//           <img
//             src={imageUrl}
//             alt="Profile"
//             className="w-60 h-50 object-cover rounded-full border-4 border-blue-200 mb-10 md:mb-0 md:mr-10 "
//           /></div>

//         <div>
//           <h2 className="text-3xl font-bold text-gray-700 mb-4">{`My name is ${name}.`}</h2>
//           <h5 className="text-gray-500 mb-2 flex">Discord: <p className="text-blue-500 ml-2 mb-4">{discordUsername}</p></h5>
//           <h5 className="text-gray-500 mb-2 flex">Github: <a href={githubUrl} className="text-blue-500 ml-2 mb-4">{githubUrl}</a></h5>
//           <h5 className="text-gray-500 mb-2">About me</h5>
//           <p className="text-xl text-gray-500 mb-4">
//             Travelling and seeing the world with my mom,<br />  was a wonderful experience for me.
//           </p>

//         </div>
//       </div>
//       <footer className="w-full mt-20">
//         <div className="flex justify-between bg-white p-10 rounded-xl">
//           <div>
//             <h5 className="text-gray-500 mb-2">Phone</h5>
//             <p className="text-blue-500">{phone}</p>
//           </div>
//           <div>

//           </div>
//           <div>
//             <h5 className="text-gray-500 mb-2">Drop your message</h5>
//             <p className="text-blue-500">{email}</p>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// }

// export default App;