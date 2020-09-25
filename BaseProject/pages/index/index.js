//index.js
//获取应用实例
const app = getApp()
const httpRequest = require('../../utils/httpRequest.js');
const api = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      params:{
        "ADDRESS":'',
        "PAGE":0
      },
      dataList:[],
      imageBaseUrl:api.ApiBaseUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.imageBaseUrl)
    this.getHomeData();
  },
/**
 * 获取首页数据
 */
  getHomeData(){
    httpRequest.post(api.ListDataApi,this.data.params).then((res)=>{
        this.setData({
          dataList:res.data
        });
        console.log(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})