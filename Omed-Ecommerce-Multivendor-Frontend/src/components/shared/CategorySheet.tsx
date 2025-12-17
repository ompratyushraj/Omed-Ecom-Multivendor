
import { useNavigate } from 'react-router-dom';
import { menLevelTwo } from '../../data/category/leveltwo/menLevelTwo';
import { womenLevelTwo } from '../../data/category/leveltwo/womenLevelTwo';
import { childrenLevelTwo } from '../../data/category/leveltwo/childrenLevelTwo';
import { elderLevelTwo } from '../../data/category/leveltwo/elderLevelTwo';
import { diagnosisdevicesLevelTwo } from '../../data/category/leveltwo/diagnosisdevicesLevelTwo';
import { menLevelThree } from '../../data/category/levelThree/menLevelThree';
import { womenLevelThree } from '../../data/category/levelThree/womenLevelThree';
import { childrenLevelThree } from '../../data/category/levelThree/childrenLevelThree';
import { elderLevelThree } from '../../data/category/levelThree/elderLevelThree';
import { diagnosisdevicesLevelThree } from '../../data/category/levelThree/diagnosisdevicesLevelThree';
import { Box } from '@mui/material';

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
