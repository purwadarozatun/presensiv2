angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomeCtrl' , function($scope , $stateParams){
  $scope.peoples = [
    { title: 'Purwa ', id: 1 },
    { title: 'Ujang', id: 2 },
    { title: 'Udi', id: 3 },
    { title: 'Asep', id: 4 },
    { title: 'kwkwkkw', id: 5 },
    { title: 'Coba', id: 6 }
  ];
})

.controller('MainCtrl', function($scope, $http, $timeout) {

    $scope.users = [];

    $scope.orderBy = "masuk";

    $scope.orderByOptions = [
        {code:'masuk', name:'Jam Masuk'},
        {code:'keluar', name:'Jam Keluar'},
        {code:'nama', name:'Nama'}
    ];

    $scope.getData = function() {

        $http.get('http://presensi.javan.co.id/service.php', { params: { orderby: $scope.orderBy, tanggal: $scope.dt.toJSON() } }).
                success(function(data, status, headers, config) {
                  $scope.users = data;
                });
    };






    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    // $scope.toggleMin = function() {
//         $scope.minDate = $scope.minDate ? null : new Date();
//     };
//
//     $scope.toggleMin();

    $scope.maxDate = new Date();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd MMMM yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];


    $scope.getData();


    if($scope.users){
      $scope.users = [{
            "absensi_nama_lengkap":"Yoga Hanggara",
            "absensi_pin":"201401050",
            "absensi_izin":null,
            "absensi_masuk":"08:14:27",
            "absensi_keluar":"14:33:08",
            "absensi_tanggal":"2015-10-14",
            "duration":"06:18:41",
            "duration_hour":6,
            "terlambat":true
         },
         {
            "absensi_nama_lengkap":"Akbar Mukti Adhatama",
            "absensi_pin":"201303040",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Muhammad Raihan Iqbal",
            "absensi_pin":"201311046",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Dewan Rahadian",
            "absensi_pin":"201410055",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Lambang Prabawa",
            "absensi_pin":"201412058",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Yudi Haribowo",
            "absensi_pin":"201001007",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Indra Sakti Wijayanto",
            "absensi_pin":"200902002",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Bayu Hendra Winata",
            "absensi_pin":"200902003",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Gugus Almi Sakti",
            "absensi_pin":"201311044",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Nanda Nandya Putra",
            "absensi_pin":"201505060",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Fahmi Achmad Fauzi",
            "absensi_pin":"209900022",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Annisa Amelia",
            "absensi_pin":"209900023",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Euis Siti Aisyah",
            "absensi_pin":"209900025",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Nita Suryani",
            "absensi_pin":"201309042",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Nurrohman",
            "absensi_pin":"201204026",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Marantika Yusti Anggih",
            "absensi_pin":"201209029",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"M. Bayu Dwi Putra",
            "absensi_pin":"201311045",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Sohib Abdul Karim",
            "absensi_pin":"201312049",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Purwa Darozatun Akbar",
            "absensi_pin":"201405051",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Aldy Ginanjar",
            "absensi_pin":"201412057",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Sugihartono",
            "absensi_pin":"201509065",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Wisnu Manupraba",
            "absensi_pin":"200902001",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Achmad Ramdhan",
            "absensi_pin":"201005008",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Dimaz Mohamad Ridwan",
            "absensi_pin":"201301036",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Iqbal Saputra",
            "absensi_pin":"201410054",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Rizki Bayu Oktavian",
            "absensi_pin":"209900021",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Asep Dadang Supriadi",
            "absensi_pin":"201508064",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Ahmad Nugraha",
            "absensi_pin":"209900024",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Dedi",
            "absensi_pin":"201201022",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Satrio Galih Wicaksono",
            "absensi_pin":"201110021",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         },
         {
            "absensi_nama_lengkap":"Rayhan Firdaus",
            "absensi_pin":"201204025",
            "absensi_izin":null,
            "absensi_masuk":null,
            "absensi_keluar":null,
            "absensi_tanggal":"2015-10-14"
         }
      ];
    }

    $scope.intervalFunction = function() {
        $timeout(function() {
            $scope.getData();
            $scope.intervalFunction();
        }, 10000)
    };

    $scope.intervalFunction();
});
