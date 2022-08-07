import { Line } from '@ant-design/plots';
const data =[
    {
      "Date": "Oct 2021",
      "value": 3,
      "type": "achieved",
    },
    {
      "Date": "Nov 2021",
      "value": 2.1,
      "type": "target",
    },
    {
      "Date": "Dec 2021",
      "value": 2.6,
      "type": "target",
    },
    {
      "Date": "Jan 2022",
      "value": 4,
      "type": "achieved",
    },
    {
      "Date": "Feb 2022",
      "value": 1.8,
      "type": "target",
    },
    {
      "Date": "Mar 2022",
      "value": 3,
      "type": "target",
    },
    {
      "Date": "Apr 2022",
      "value": 4.8,
      "type": "achieved",
    },
    {
        "Date": "May 2022",
        "value": 2,
        "type": "target",
      },
      {
        "Date": "June 2022",
        "value": 4.2,
        "type": "achieved",
      }]
   
const config = {
        data,
        xField: 'Date',
        yField: 'value',
       
        seriesField: 'type',
        color: ({ type }) => {
          return type === 'achieved' ? 'rgba(251, 137, 107, 0.5)' : type === 'target' ? 'rgba(105, 86, 229, 1)' : '#FAAD14';
        },
        lineStyle: ({ type }) => {
          if (type === 'target') {
            return {
              lineDash: [1, 1],
              opacity: 1,
            };
          }
    
        
        },
         smooth:true
      };
 export  const Chart = ()=>{
    return  <Line {...config}  />
 }    