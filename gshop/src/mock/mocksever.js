import Mock from 'mockjs'
import shouye_data from './shouye_data.json'
import category from './category.json'
import categoryList from './categoryList.json'
import cateList from './cateList.json'

Mock.mock("/kingKongList",{code:0,data:shouye_data.kingKongModule.kingKongList});
// Mock.mock("/policyDescList",{code:0,data:shouye_data.policyDescList});
// Mock.mock("/focusList",{code:0,data:shouye_data.focusList});
// Mock.mock("/tagList",{code:0,data:shouye_data.tagList});
// Mock.mock("/popularItemList",{code:0,data:shouye_data.popularItemList});
// Mock.mock("/newItemList",{code:0,data:shouye_data.newItemList});
Mock.mock("/cateList",{code:0,data:cateList});
Mock.mock("/category",{code:0,data:category});
Mock.mock("/categoryList",{code:0,data:categoryList});
Mock.mock("/subCateList",{code:0,data:cateList.subCateList});
