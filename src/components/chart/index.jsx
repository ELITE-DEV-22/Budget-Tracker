
import Chart from "react-apexcharts";

const options ={
    lables : ["Income","Expense"],
    colors : ["#213ebf","#fd5e53"],
    chart: {
        width: "50px",
    },
    states:{
        hover:{
            filter:{
                type: "none",
            },
        },
    },
    legend:{
        show: false,
    },
    dataLables: {
        enabled: false,
    },
    hover:{mode:null},
    plotOptions:{
        donut:{
            expandOnClick: false,
            donut: {
                lables:{
                    show: false,
                },
            },
        },
    },

    fill:{
        colors: ["#213ebf","#fd5e53"],
    },
    tooltip: {
        enables: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            background: "#000000",
        },
    },
};


export default function TransactionChartSummary({Income=100, Expense = 100}){
    return <Chart
            options={options}
            series={[Income, Expense]}
            type="pie"
            widht={"100%"}
            height={"100%"}
            />
}