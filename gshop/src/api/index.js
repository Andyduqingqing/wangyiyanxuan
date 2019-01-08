import ajax from './ajax';
const BASE='/api';


// export const reqPolicyDescList =()=>ajax(`/PolicyDescList`);
// export const reqFocusList =()=>ajax(`/focusList`);
export const reqKingKongList =()=>ajax(`/kingKongList`);
export const reqCateList =()=>ajax(`/cateList`);
export const reqCategory =()=>ajax(`/category`);
export const reqCategoryList =()=>ajax(`/categoryList`);
// export const reqTagList =()=>ajax(`/tagList`);
// export const reqPolicyDescList =()=>ajax(`/policyDescList`);
// export const reqPopularItemList =()=>ajax(`/popularItemList`);
// export const reqNewItemList =()=>ajax(`/newItemList`);

export const reqTopicList = ()=> ajax(`${BASE}/topic/v1/find/recManual.json`)
