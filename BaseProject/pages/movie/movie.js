// pages/movie/movie.js

const httpRequest = require('../../utils/httpRequest.js');
const api = require('../../utils/api.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataList1:[],
    dataList2:[],
    dataList3:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieHomeData()
  },
  /**
   * 获取电影首页数据
   */
  getMovieHomeData(){
    httpRequest.get(api.NowMovieDataApi,{start:0,count:3}).then((res)=>{
      console.log(res)
      this.setData({
        dataList1:res.subjects
      })
    }).catch((err)=>{
      console.log(err)
    }),
    httpRequest.get(api.ComingMovieDataApi,{start:0,count:3}).then((res)=>{
      console.log(res)
      this.setData({
        dataList2:res.subjects
      })
    }).catch((err)=>{
      console.log(err)
    })
    httpRequest.get(api.Top250MovieDataApi,{start:0,count:3}).then((res)=>{
      console.log(res)
      this.setData({
        dataList3:res.subjects
      })
    }).catch((err)=>{
      console.log(err)
    })
  },
  /**
   * 电影详情
   */
  showMovieDetail(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?movieId='+event.detail.movieId+'&title='+event.detail.title,
    })
  },
  /**
   * 更多电影
   */
  showMoreMovie(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+event.currentTarget.dataset.type,
    })
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