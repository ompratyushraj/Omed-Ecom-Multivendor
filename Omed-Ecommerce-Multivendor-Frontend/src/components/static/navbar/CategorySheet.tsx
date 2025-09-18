import { menLevelTwo } from '../../../customer/data/category/leveltwo/menLevelTwo';
import { menLevelThree } from '../../../customer/data/category/levelThree/menLevelThree';
import { womenLevelTwo } from '../../../customer/data/category/leveltwo/womenLevelTwo';
import { childrenLevelTwo } from '../../../customer/data/category/leveltwo/childrenLevelTwo';
import { elderLevelTwo } from '../../../customer/data/category/leveltwo/elderLevelTwo';
import { womenLevelThree } from '../../../customer/data/category/levelThree/womenLevelThree';
import { childrenLevelThree } from '../../../customer/data/category/levelThree/childrenLevelThree';
import { diagnosisdevicesLevelThree } from '../../../customer/data/category/levelThree/diagnosisdevicesLevelThree';
import { diagnosisdevicesLevelTwo } from '../../../customer/data/category/leveltwo/diagnosisdevicesLevelTwo';
import { Box } from '@mui/material';
import { elderLevelThree } from '../../../customer/data/category/levelThree/elderLevelThree';
import { useNavigate } from 'react-router-dom';

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  children: childrenLevelTwo,
  elderly: elderLevelTwo,
  diagnosis_devices: diagnosisdevicesLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  children: childrenLevelThree,
  elderly: elderLevelThree,
  diagnosis_devices: diagnosisdevicesLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
  const navigate = useNavigate();
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => child.parentCategoryId == parentCategoryId);
  };

  return (
    <Box
      sx={{ zIndex: 2 }}
      className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
    >
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item: any, index: number) => (
          <div
            key={item.categoryId || index}
            className={`p-8 lg:w-[20%] ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
          >
            <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(categoryThree[selectedCategory], item.categoryId).map(
                (item: any, i: number) => (
                  <li onClick={()=>navigate("/product/"+item.categoryId)} key={i} className="hover:text-primary-color cursor-pointer">
                    {item.name}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
