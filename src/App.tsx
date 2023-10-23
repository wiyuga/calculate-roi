const calculateTotalLump = () => {
  var investment = +formDataLump.investment;
  var period = +formDataLump.period;
  var expected_return = +formDataLump.return;
  var expected_graph = [];
  var initialInvestment = +formDataLump.investment;
  var monthlyWithdrawal = +withdrawalAmount; // New: Get monthly withdrawal amount
  expected_graph.push(investment);

  for (var year = 1; year <= period; year++) {
    for (var month = 1; month <= 12; month++) {
      // Deduct monthly withdrawal from the investment amount at the beginning of each month
      investment = investment - monthlyWithdrawal;
      investment = investment + Math.round((investment / 100) * (expected_return / 12));
    }
    expected_graph.push(investment);
  }

  var wealthGain = investment - initialInvestment;
  setInvestedAmount(initialInvestment);
  setTotalAmount(investment);
  setChartData({
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Amount Invested", "Wealth Gain"],
    datasets: [
      {
        data: [initialInvestment, wealthGain],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  });
  setcompoundedDataLump(expected_graph);
}
