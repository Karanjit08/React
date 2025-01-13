var Contact = () => {
  return (
    <div className="h-[100vh] flex items-center  flex-col  bg-body">
      <h1 className="font-bold text-2xl   ">This is Contact Us Page</h1>
      <div>
        <form>
          <input type="text" placeholder="Name" className="border-2 border-black m-4 p-1 rounded-lg   "></input>
          <input type="text" placeholder="Message"className="border-2 border-black m-4 p-1 rounded-lg" ></input>
        </form>
      </div>
      <button className="border-2 border-black bg-green rounded-lg px-2">Submit</button>
    </div>
  );
};

export default Contact;
