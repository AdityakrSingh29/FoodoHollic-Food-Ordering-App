const Contact = () => {
    return (
      <div>
        <h1 className="font-bold text-3xl p-4 m-4">Welcome To Contact us page!</h1>
        <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
        <input type="text" className="border border-black p-2 m-2"  placeholder="message"/>
        <button className="border border-black p-2 m-2 bg-green-400 rounded-lg" >Submit</button>

        </form>
      </div>
    );
  };
  
  export default Contact;
  