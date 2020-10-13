// components/move-item/move-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:Object
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      console.log(event)
      this.triggerEvent("showDetail",{movieId:event.currentTarget.dataset.movieId,title:event.currentTarget.dataset.movieTitle})
    }
  }
})
