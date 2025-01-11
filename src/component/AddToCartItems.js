import { baseImageURL } from "../utils/common";



var AddToCartItems = ({data}) => {
    return (
        <div
          key={data.card.info.id}
          className="w-[40%] border-accordianSelect border-b-2 flex justify-between items-center"
        >
          <div className="flex flex-col ">
            <div className="font-medium">{data.card.info.name}</div>
            <div className="font-light ">{data.card.info.category}</div>
            <div className="font-light  text-sm text-gray-600">
              {data.card.info.description}
            </div>
          </div>
          <div className="w-[40%]">
          <img
            className=" object-cover rounded-xl pb-4 "
            src={`${baseImageURL}${data.card.info.imageId}`}
          ></img>
          </div>
        </div>
      );
}

export default AddToCartItems;