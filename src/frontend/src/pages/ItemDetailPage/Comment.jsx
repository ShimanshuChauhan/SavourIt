import BlogImg from "../../assets/Hamburger-and-french-fries-paper-box.webp";
const Comment = () => {
  return (
    <>
      <div className="my-4 flex">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={BlogImg} />
          </div>
        </div>
        &nbsp;&nbsp;
        <div className="flex flex-col">
          <p className="text-xl">
            This thing is good. <br />
          </p>
          <p className="text-xs">customer1</p>
        </div>
      </div>
      <p className="border-b-2"></p>
    </>
  );
};

export default Comment;
