// pages/posts/posts.js

// var postData = require('../../data/posts-data.js')
import {postList} from "../../data/posts-data.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts:postList,
    isShow:false
  },
  /**
   * 进入文章详情页面
   */
   goToDetail(e){
    const postId = e.currentTarget.dataset.postId
    wx.navigateTo({
      url: '/pages/posts-detail/posts-detail?postId='+postId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.setData({
    //   posts:postData.postList
    // })

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