import CategoryImg from '../../../assets/category-img.jpg';
import './category.css';
import {useNavigate} from "react-router-dom";
import useFetch from '../../../Myhooks/useFech';

function Category({ categories }) {
    const navigat=useNavigate();
    // console.log(categories?.data[0]?.attributes?.img?.data?.attributes);
    return (
        <div className="category-section">
            <div className="categories">
                {categories?.data.map(data => {
                       let img= data?.attributes?.img?.data?.attributes?.url;
                    //    console.log(img)
                    return (
                        <div className="category" key={data.id}  onClick={()=>navigat(`../category/${data.id}`)}>
                            <img src={ import.meta.env.REACT_APP_DEV_URL+img} alt="no img" />
                        </div>
                    )

                 })} 
            </div>
        </div>
    )
    
}
export default Category;