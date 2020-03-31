//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabIndex:0,
    array:[{
      time:"15:16",
      title:"福特和通用将在100天内生产5万台呼吸机",
      type:"#新闻相关",
      content:"据美国中文网报道，福特（Ford）和通用电气医疗集团（GE Healthcare) 30日宣布，计划生产一种简化的呼吸机，目标是到7月初生产5万台，以后每月最多生产3万台，以抗击新冠肺炎疫情",
    },
    {
      time: "15:16",
      title: "50亿元的中久激光项目落户",
      type: "#会议相关",
      content: "3月10日，2020年省市县三级联动推进重大项目开工大会在临空组团中久激光产业有限公司项目地块上举行。项目一期总投资50亿元，占地166亩，建成达产后，预计实现年销售收入逾35亿元，实现利税10亿元。（江西日报）",
    },
    {
      time: "15:17",
      title: "罗永浩抖音首播多款货品被曝光",
      type: "#产品信息",
      content: "测试消息哈哈哈哈哈哈哈哈哈哈哈哈",
    }],
    array2: [{
      time: "15:19",
      title: "增加的测试",
      type: "#新闻相关",
      content: "啥也不懂就增加呗",
    }],

    height:"",
  },
  changeTabIndex: function (e) {
    var index = e.currentTarget.dataset['index'];
    this.setData({ tabIndex: index});
  },
  lower(e){
    var _this = this;
    //听说小程序，要这么着才能获取数据
    console.log(_this.array);
    console.log(_this.array2);
    let newArray = _this.array.contact(_this.array2);
    this.setData({array:newArray}) 
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

  },
  getUserInfo: function(e) {
   
  }
})
