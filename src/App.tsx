function App() {
  const name = 'SunnyJ🌤️🎄';
  const githubUrl = 'https://github.com/AnchanaCamchern/Profiles';
  const discordUsername = '@Signjjyd';
  const imageUrl = `https://i.pinimg.com/originals/01/9a/ed/019aed22e90a64b3fdbb0f1bec78441c.png`;
  const email = `sign.ac@odds.team`;
  const phone = `+(66) 585-XXXX`;
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white p-10 rounded-xl">
        <div>
          <img
            src={imageUrl}
            alt="Profile"
            className="w-60 h-50 object-cover rounded-full border-4 border-blue-200 mb-10 md:mb-0 md:mr-10 "
          /></div>

        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">{`My name is ${name}.`}</h2>
          <h5 className="text-gray-500 mb-2 flex">Discord: <p className="text-blue-500 ml-2 mb-4">{discordUsername}</p></h5>
          <h5 className="text-gray-500 mb-2 flex">Github: <a href={githubUrl} className="text-blue-500 ml-2 mb-4">{githubUrl}</a></h5>
          <h5 className="text-gray-500 mb-2">About me</h5>
          <p className="text-xl text-gray-500 mb-4">
            I'm person who love to code and learn new things.
          </p>
        </div>
      </div>
      <footer className="w-full mt-20">
        <div className="flex justify-between bg-white p-10 rounded-xl">
          <div>
            <h5 className="text-gray-500 mb-2">Phone</h5>
            <p className="text-blue-500">{phone}</p>
          </div>
          <div>
            <h5 className="text-gray-500 mb-2">Drop your message</h5>
            <p className="text-blue-500">{email}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;