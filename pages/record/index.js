import utils from '../../utils/util';
const app = getApp();

Page({
  data: {
    count: 0,
    total: 0,
    header: [{
      label: '开课时间',
      prop: 'createTime',
      width: 150
    }, {
      label: '日期',
      prop: 'weekday',
      width: 80
    }, {
      label: '签到状态',
      prop: 'signInStatus',
      width: 100
    }, {
      label: '课程',
      prop: 'subjectName',
      width: 180
    }, {
      label: '节次',
      prop: 'arrangeDesc',
      width: 100
    }, {
      label: '签到时间',
      prop: 'signInTime',
      width: 150
    }],
    originList: [],
    list: [{
        "signInStatus": "旷课",
        "signInTime": "2019-05-15 14:15:59",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 923,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 986,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 1049,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-04-27 15:04:19",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1112,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-04-27 15:04:09",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1175,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1238,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-04-27 15:12:16",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1301,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-04-27 21:35:48",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1364,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1428,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-05-14 23:14:21",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1491,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1554,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-05-15 11:37:00",
        "createTime": "2019-05-14 23:26:29",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1617,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 14:09:15",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 1680,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "准点",
        "signInTime": "2019-05-15 14:10:48",
        "createTime": "2019-05-15 14:09:52",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 1743,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 15:42:58",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1806,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 15:43:09",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1869,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 15:51:30",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 1932,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 16:10:16",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 3,
        "arrangeDesc": "第3节-第4节",
        "attendanceId": 1995,
        "subjectName": "思想道德修养与法律基础"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 20:40:44",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 2058,
        "subjectName": "形势与政策（一）"
      },
      {
        "signInStatus": "旷课",
        "signInTime": null,
        "createTime": "2019-05-15 20:40:57",
        "studentName": "林佳苗",
        "weekday": "星期一",
        "relationId": 5,
        "arrangeDesc": "第5节-第6节",
        "attendanceId": 2121,
        "subjectName": "形势与政策（一）"
      }
    ]
  },
  onLoad: function() {
    this.createData();
  },
  createData() {
    let arr = [],
      origin = this.data.list[0];
    for (let i = 0; i < 24; i++) {
      let t = new Date(origin.time),
        rt = new Date(origin.releaseTime);
      let r = Math.round(Math.random() * 10);
      arr.push({
        equipName: `西城区52号35${ i < 10 ? '0' + i : i}`,
        warnCode: origin.warnCode + i,
        content: origin.content,
        isRelease: i % 2 === 0 ? true : false,
        time: utils.formatTime(new Date(t - r * 24 * 3600 * 1000)),
        releaseTime: utils.formatTime(new Date(rt - (r - 2) * 24 * 3600 * 1000))
      });
    }
    this.setData({
      count: 4,
      originList: arr,
      list: this.data.list.concat(arr).slice(0, 20),
      total: Math.ceil(arr.length / 6)
    });
  },
  tableClick(e) {
    console.log(e.detail);
  },
  tableChange(e) {
    console.log(e.detail);
    let arr = this.data.originList;
    this.setData({
      list: arr.slice(e.detail.current - 1, e.detail.current - 1 + 6)
    });
  }
});