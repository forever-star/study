/**
 * Created by appian on 2016/11/7.
 */
/* eslint-disable */
var myDate = new Date();
var nowhours= myDate.getHours();
var nowminutes=myDate.getMinutes();

var temptimevalue=new Array
var timecount=0;
for(var i=nowhours;i<24;i++){
    if(timecount==0){

        var tempminute=new Array
        var v=parseInt(nowminutes/10)+1

        for(v;v<6;v++){
            tempminute.push({ "value": v+"0分"})
        }



        temptimevalue.push({"value":i+"点","child": tempminute,"id": 0})
    }else {
        temptimevalue.push({"value":i+"点","child": [
            {
                "value": "0分"
            },
            {
                "value": "10分"
            },
            {
                "value": "20分"
            },
            {
                "value": "30分"
            },
            {
                "value": "40分"
            },
            {
                "value": "50分"
            }
        ],"id": 0})
    }





    timecount++
}

var $time = [

	{
		"value": "今天",
		"child": temptimevalue,
		"id": 1
	},
    {
        "value": "明天",
        "child": [
            {
                "value": "0点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "1点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "2点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "3点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "4点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "5点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "6点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "7点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "8点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "9点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "10点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "11点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "12点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "13点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "14点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "15点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "16点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "17点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "18点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "19点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "20点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "21点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "22点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "23点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            }

        ],
        "id": 1
    },
    {
        "value": "后天",
        "child": [
            {
                "value": "0点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "1点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "2点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "3点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "4点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "5点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "6点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "7点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "8点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "9点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "10点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "11点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "12点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "13点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "14点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "15点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "16点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "17点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "18点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "19点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "20点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "21点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "22点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            },
            {
                "value": "23点",
                "child": [
                    {
                        "value": "0分"
                    },
                    {
                        "value": "10分"
                    },
                    {
                        "value": "20分"
                    },
                    {
                        "value": "30分"
                    },
                    {
                        "value": "40分"
                    },
                    {
                        "value": "50分"
                    }
                ],
                "id": 0
            }

        ],
        "id": 1
    },
];