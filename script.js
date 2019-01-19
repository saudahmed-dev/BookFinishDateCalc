{
  let app = angular.module("calcController", []);

  let MainController = function($scope) {

    let currentDay = new Date();
    let finishDate = new Date();
    let pagesLeft = 0;

    let currentPage = () => $scope.currentPage;
    let pagesPerWeek = () => $scope.pagesPerWeek;
    let totalPages = () => $scope.totalPages;
    
    let calcPagesRemaining = () => {
      pagesLeft = totalPages() - parseInt(currentPage());
      $scope.pagesRemaining = `${pagesLeft} pages to go !`;
    };

    
    $scope.today = currentDay.toDateString();

    let calcFinishDay = () => {
      finishDate = new Date()
      let daysRemaining = Math.round(pagesLeft / (pagesPerWeek() / 7));

      finishDate.setDate(currentDay.getDate() + daysRemaining);
      finishDate = finishDate.toDateString();
      $scope.finishDate = finishDate;
    };

    $scope.calculate = () => {
      calcPagesRemaining();
      calcFinishDay();
       
    };
  };

  app.controller("MainController", MainController);
}