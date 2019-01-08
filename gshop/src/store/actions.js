import {reqKingKongList,reqCateList,reqCategory,reqcategoryList,reqTopicList} from '../api';
import {SETKINGKONGLIST,SETCATELIST,SETCATEGORY,SETCATEGORYLIST,RECEIVE_TOPICLIST} from './mutations-type';
export default {
  // async getPolicyDescList({commit}, cb){
  //   const result = await reqPolicyDescList();
  //   if (!result.code) {
  //     commit(SETPOLICYDESCLIST, {policyDescList: result.data});
  //     typeof cb === "function" && cb();
  //   }
  // },
  async getKingKongList({commit}){
    const result = await reqKingKongList();
    if (result.code===0) {
      console.log(result)
      commit(SETKINGKONGLIST, {kingkonglist: result.data});
    }
  },
  async getCateList({commit}){
    const result = await reqCateList();
    if(!result.code){
      commit(SETCATELIST,{cateList:result.data});
    }
  },
  // async getsubCateList({commit}){
  //   const result = await reqsubCateList();
  //   if (result.code===0) {
  //     commit(SETSUBCATELIST, {subCateList: result.data});
  //   }
  // },
  async getCategory({commit},cb){
    const result = await reqCategory();
    if(!result.code){
      commit(SETCATEGORY,{category:result.data});
      typeof cb=="function"&&cb();
    }
  },
  async getCategoryList({commit}){
    const result = await reqCategoryList();
    if(!result.code){
      commit(SETCATEGORYLIST,{categoryList:result.data});
    }
  },
  // async getFocusList({commit}){
  //   const result = await reqFocusList();
  //   if (!result.code) {
  //     commit(SETFOCUSLIST, {focusList: result.data});
  //   }
  // },
  // async getTagList({commit}){
  //   const result = await reqTagList();
  //   if (!result.code) {
  //     commit(SETTAGLIST, {tagList: result.data});
  //   }
  // },
  // async getPopularItemList({commit}, cb){
  //   const result = await reqPopularItemList();
  //   if (!result.code) {
  //     commit(SETPOPULARITEMLIST, {popularItemList: result.data});
  //     typeof cb == "function" && cb();
  //   }
  // },
  // async getNewItemList({commit}){
  //   const result = await reqNewItemList();
  //   if (!result.code) {
  //     commit(SETNEWITEMLIST, {newItemList: result.data});
  //   }
  // }
  async getTopicList({commit}){
    const result = await reqTopicList()
    let topicList = []
    if(result.code==='200'){
      result.data.forEach((item,index)=>{
        topicList =  topicList.concat(item.topics)
      })
      commit(RECEIVE_TOPICLIST,{topicList})
    }
  }
}


