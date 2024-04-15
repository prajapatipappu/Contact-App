
// import the navbar component
import Navbar from "./Components/Navbar";

// importing contactList component containing the main container
import ContactApp from "./Components/ContactList";


function App() {
  return (
    <div className="h-screen flex flex-col w-full">
      {/* rendering the Navbar */}
      <Navbar />
      {/* render the Contact App*/}
      <ContactApp />
    </div>
  );
}

export default App;
