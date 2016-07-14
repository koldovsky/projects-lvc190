var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Dril Maria",
            "websiteUrl": "https://marysta.github.io/my-website/",
            "codeSourceUrl": "https://github.com/Marysta/my-website",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Fitel' Dmytro",
            "websiteUrl": "https://dmytrofitel.github.io/beyondthisplace/",
            "codeSourceUrl": "https://github.com/dmytrofitel/beyondthisplace",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Kashuba Petro",
            "websiteUrl": "https://kurrama.github.io/space-024/",
            "codeSourceUrl": "https://github.com/Kurrama/space-024",
            "photo": "images/students/kashuba.jpg",
            "cvUrl": ""
        },
        {
            "name": "Domashchuk Yaryna",
            "websiteUrl": "https://yaryna-domashchuk.github.io/personal_website/",
            "codeSourceUrl": "https://github.com/yaryna-domashchuk/personal_website.git",
            "photo": "images/students/domaschuk.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B_sVmAN-hPblb1Q2eUU0ajVKWHM/view?usp=sharing"
        },
        {
            "name": "Lytvyn Oleg",
            "websiteUrl": "https://igocooper.github.io/project_final/",
            "codeSourceUrl": "https://github.com/igocooper/project",
            "photo": "images/students/lytvyn.jpg",
            "cvUrl": ""
        },
        {
            "name": "Medvedchuk Oles'",
            "websiteUrl": "https://oles88.github.io/diplom/",
            "codeSourceUrl": "https://github.com/Oles88/diplom",
            "photo": "images/students/medvedchuk.jpg",
            "cvUrl": ""
        },
        {
            "name": "Dzenhliuk Oleh",
            "websiteUrl": "https://dzenglyuk.github.io/dzenhliuk/",
            "codeSourceUrl": "https://github.com/dzenglyuk/dzenhliuk",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Hnatyshyn Yurii",
            "websiteUrl": "https://venom2204.github.io/Hnatyshyn_Yurii/",
            "codeSourceUrl": "https://github.com/venom2204/Hnatyshyn_Yurii",
            "photo": "images/students/hnatyshyn.jpg",
            "cvUrl": ""
        },
        {
            "name": "Onishko Andrii",
            "websiteUrl": "https://onishkoandrii.github.io/lateproject/",
            "codeSourceUrl": "https://github.com/OnishkoAndrii/lateproject",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Maharyta Oleksandr",
            "websiteUrl": "https://oleksandrmaharyta.github.io/sample04/",
            "codeSourceUrl": "https://github.com/OleksandrMaharyta/sample04",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Lymar Andrii",
            "websiteUrl": "https://the-jinx.github.io/thewebsitethatwaspromised/",
            "codeSourceUrl": "https://github.com/The-Jinx/thewebsitethatwaspromised",
            "photo": "images/students/lymar.jpg",
            "cvUrl": ""
        },
        {
            "name": "Zimmerman Vladimir",
            "websiteUrl": "https://childrenut-wowan.c9users.io/index.html",
            "codeSourceUrl": "https://github.com/Wowanl/MedUt-front-page/blob/gh-pages/index.html",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Horin Serhii",
            "websiteUrl": "https://serhiihorin.github.io/flexible/",
            "codeSourceUrl": "https://serhiihorin.github.io/coffee1/",
            "photo": "images/students/horin.jpg",
            "cvUrl": ""
        },
        {
            "name": "Pavliv Oleh",
            "websiteUrl": "https://olehpavliv.github.io/new_project/",
            "codeSourceUrl": "https://github.com/OlehPavliv/new_project",
            "photo": "images/students/pavliv.jpg",
            "cvUrl": ""
        },
        {
            "name": "Kompanets' Nikita",
            "websiteUrl": "https://nikitakompanetc.github.io/sitetry1/",
            "codeSourceUrl": "",
            "photo": "images/students/holyk.jpg",
            "cvUrl": ""
        },
        {
            "name": "Holyk Taras",
            "websiteUrl": "http://uaholykta.github.io/Photographer/index.html",
            "codeSourceUrl": "https://github.com/UAHOLYKTA/Photographer",
            "photo": "images/students/holyk.jpg",
            "cvUrl": ""
        },
        {
            "name": "Savva Volodymyr",
            "websiteUrl": "https://graafx1.github.io/site/",
            "codeSourceUrl": "https://github.com/graafx1/site",
            "photo": "images/students/savva.jpg",
            "cvUrl": ""
        },
        {
            "name": "Skobalo Dmytro",
            "websiteUrl": "https://dmytroskobalo.github.io/newGrapes/",
            "codeSourceUrl": "https://ide.c9.io/dimidrol/new_grapes",
            "photo": "images/students/no-photo.gif",
            "cvUrl": "https://docs.google.com/document/d/11vfOjXjmCVQ49scelTblP-WixlchS1EyTGtkizsJFSc/edit"
        },
        {
            "name": "Serkez Olena",
            "websiteUrl": "https://helenlviv.github.io/st03/",
            "codeSourceUrl": "https://helenlviv.github.io/st03/",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Malashniak Mariana",
            "websiteUrl": "https://marianammm.github.io/sample07/",
            "codeSourceUrl": "https://github.com/marianammm/sample07/blob/gh-pages/index.html",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        },
        {
            "name": "Tsyupyk Volodymyr",
            "websiteUrl": "https://volodymyr2906.github.io/first-site/",
            "codeSourceUrl": "https://github.com/volodymyr2906/first-site",
            "photo": "images/students/tsiupyk.jpg",
            "cvUrl": ""
        },
        {
            "name": "Navytka Nataliya",
            "websiteUrl": "http://navytka.com/",
            "codeSourceUrl": "",
            "photo": "images/students/navytka.jpg",
            "cvUrl": "http://navytka.com/"
        },
        {
            "name": "Ostap Koverko",
            "websiteUrl": "https://ostapkoverko.github.io/airsoft/",
            "codeSourceUrl": "https://github.com/OstapKoverko/airsoft",
            "photo": "images/students/koverko.jpg",
            "cvUrl": "https://drive.google.com/file/d/0B_22d-Jbd6AcM2VrODg3UU1qN00/view?usp=sharing"
        },
        {
            "name": "Vovnyanka Volodymyr",
            "websiteUrl": "https://voldemarv.github.io/site_1/",
            "codeSourceUrl": "https://github.com/voldemarv/site_1",
            "photo": "images/students/no-photo.gif",
            "cvUrl": ""
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
