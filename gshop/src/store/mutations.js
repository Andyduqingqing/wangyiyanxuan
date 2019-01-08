
import {SETKINGKONGLIST,SETCATEGORYLIST,SETCATEGORY,SETCATELIST,RECEIVE_TOPICLIST} from './mutations-type';

export default {
  // [SETFOCUSLIST](state, {focusList}){
  //   state.focusList = focusList;
  // },
  [SETKINGKONGLIST](state, {kingkonglist}){
    state.kingkonglist = kingkonglist;
  },
  // [SETSUBCATELIST](state,{subCateList}){
  //   state.subCateList = subCateList;
  // },
  [SETCATEGORY](state,{category}){
    state.category=category;
  },
  [SETCATEGORYLIST](state,{categoryList}){
    state.categoryList=categoryList;
  },
  [SETCATELIST](state,{cateList}){
    state.cateList=cateList;
  },
  // [SETTAGLIST](state, {tagList}){
  //   state.tagList = tagList;
  // },
  // [SETPOLICYDESCLIST](state, {policyDescList}){
  //   state.policyDescList = policyDescList;
  // },
  // [SETPOPULARITEMLIST](state, {popularitemlist}){
  //   state.popularitemlist = popularitemlist;
  // },
  // [SETNEWITEMLIST](state, {newitemlist}){
  //   state.newitemlist = newitemlist;
  // },
  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList = topicList
  }
}

