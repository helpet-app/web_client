<template>
    <div class="main-wrapper">
    <layout-headeradmin></layout-headeradmin>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
               <div class="page-wrapper">
               
                   <div class="content container-fluid">
                       
                      <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="card">
                <div class="bg-soft-primary">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-3">
                        <h5 class="text-primary">Welcome Back !</h5>
                        <p class="mb-3">Mentoring Panel</p>
                      </div>
                    </div>
                    <div class="align-self-end col-5"><img src="../../assets/img/admin/profile-img.png" alt="" class="img-fluid"></div>
                  </div>
                </div>
                <div class="pt-0 card-body">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="avatar-md profile-user mb-4"><img src="../../assets/img/admin/profiles/avatar-05.jpg" alt="" class="img-thumbnail rounded-circle img-fluid"></div>
                      <div class="d-block">
                        <h5 class="text-truncate">Sofia Brient</h5>
                        <p class="text-muted mb-0  text-truncate">Administrator</p>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-6">
                            <h5 class="font-size-15">12</h5>
                            <p class="text-muted mb-0">Meetings</p>
                          </div>
                          <div class="col-6">
                            <h5 class="font-size-15">$1245</h5>
                            <p class="text-muted mb-0">Revenue</p>
                          </div>
                        </div>
                        <div class="mt-4"><router-link class="btn btn-primary waves-effect waves-light btn-sm" to="/admin/profile">View Profile <i class="mdi mdi-arrow-right ml-1"></i></router-link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card flex-fill">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title">Invoice Analytics</h5>
                    <div class="dropdown" data-toggle="dropdown">
                      <a href="javascript:void(0);" class="btn btn-white btn-sm dropdown-toggle" role="button" data-toggle="dropdown">
                      Monthly
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                        <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                        <a href="javascript:void(0);" class="dropdown-item">Yearly</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div> <apexchart
                        type="donut"
                        width="300"
                        :options="piechartOptions"
                        :series="piechartSeries"
                    ></apexchart></div>
                  <div class="text-center text-muted">
                    <div class="row">
                      <div class="col-4">
                        <div class="mt-4">
                          <p class="mb-2 text-truncate"><i class="fas fa-circle text-primary mr-1"></i> Invoiced</p>
                          <h5>$ 2,132</h5>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-4">
                          <p class="mb-2 text-truncate"><i class="fas fa-circle text-success mr-1"></i> Received</p>
                          <h5>$ 1,763</h5>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-4">
                          <p class="mb-2 text-truncate"><i class="fas fa-circle text-danger mr-1"></i> Pending</p>
                          <h5>$ 973</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="row">
                <div class="col-xl-4 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="dash-widget-header">
                        <span class="dash-widget-icon text-primary bg-primary-light">
                        <i class="fas fa-user"></i>
                        </span>
                        <div class="dash-count">
                          <h3>168</h3>
                        </div>
                      </div>
                      <div class="dash-widget-info">
                        <h6 class="text-muted">Members</h6>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-primary w-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="dash-widget-header">
                        <span class="dash-widget-icon text-success bg-success-light">
                        <i class="fas fa-credit-card"></i>
                        </span>
                        <div class="dash-count">
                          <h3>487</h3>
                        </div>
                      </div>
                      <div class="dash-widget-info">
                        <h6 class="text-muted">Appointments</h6>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-success w-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="dash-widget-header">
                        <span class="dash-widget-icon text-warning bg-warning-light">
                        <i class="fas fa-star"></i>
                        </span>
                        <div class="dash-count">
                          <h3>485</h3>
                        </div>
                      </div>
                      <div class="dash-widget-info">
                        <h6 class="text-muted">Mentoring Points</h6>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-warning w-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card flex-fill">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title">Sales Analytics</h5>
                    <div class="dropdown" data-toggle="dropdown">
                      <a href="javascript:void(0);" class="btn btn-white btn-sm dropdown-toggle" role="button" data-toggle="dropdown">
                      Monthly
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                        <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                        <a href="javascript:void(0);" class="dropdown-item">Yearly</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                    <div class="w-md-100 d-flex align-items-center mb-3 chart-content">
                      <div>
                        <span>Total Sales</span>
                        <p class="h3 text-primary mr-5">$1000</p>
                      </div>
                      <div>
                        <span>Receipts</span>
                        <p class="h3 text-success mr-5">$1000</p>
                      </div>
                      <div>
                        <span>Expenses</span>
                        <p class="h3 text-danger mr-5">$300</p>
                      </div>
                      <div>
                        <span>Earnings</span>
                        <p class="h3 text-dark mr-5">$700</p>
                      </div>
                    </div>
                  </div>
                <div>
                    <apexchart
                        type="bar"
                        :options="barchartOptions"
                        :series="barchartSeries"
                    ></apexchart>
                </div>
                </div>
              </div>
            </div>
          </div>


                       <div class="row">
                        <div class="col-md-6 d-flex">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table flex-fill">
                                <div class="card-header">
                                    <h4 class="card-title">Mentor List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Mentor Name</th>
                                                    <th>Course</th>
                                                    <th>Earned</th>
                                                    <th>Reviews</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in mentorlist" :key="item.id">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                            <router-link to="/admin/profile">{{item.name}}</router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.course}}</td>
                                                    <td>{{item.earned}}</td>
                                                    <td>
                                                        <i class="fa fa-star text-warning menteee"></i>
                                                        <i class="fa fa-star text-warning menteee"></i>
                                                        <i class="fa fa-star text-warning menteee"></i>
                                                        <i class="fa fa-star text-warning menteee"></i>
                                                        <i class="fa fa-star-o text-secondary"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Recent Orders -->
                            
                        </div>
                        <div class="col-md-6 d-flex">
                        
                            <!-- Feed Activity -->
                            <div class="card  card-table flex-fill">
                                <div class="card-header">
                                    <h4 class="card-title">Mentee List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>													
                                                    <th>Mentee Name</th>
                                                    <th>Phone</th>
                                                    <th>Last Visit</th>
                                                    <th>Paid</th>													
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in menteelist" :key="item.id">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                            <router-link to="/admin/profile">{{item.name}} </router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.phone}}</td>
                                                    <td>{{item.lastvisit}}</td>
                                                    <td class="text-right">{{item.paid}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Feed Activity -->
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table">
                                <div class="card-header">
                                    <h4 class="card-title">Booking List</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Mentor Name</th>
                                                    <th>course</th>
                                                    <th>Mentee Name</th>
                                                    <th>Booking Time</th>
                                                    <th>Status</th>
                                                    <th class="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in bookinglist" :key="item.id">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                            <router-link to="/admin/profile">{{item.name}}</router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.course}}</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image1)" alt="User Image"></router-link>
                                                            <router-link to="/admin/profile">{{item.menteename}} </router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.date}} <span class="text-primary d-block">{{item.time}}</span></td>
                                                    <td>
                                                        <div class="status-toggle">
                                                            <input type="checkbox" id="status_1" class="check" checked>
                                                            <label for="status_1" class="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td class="text-right">
                                                        {{item.amount}}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Recent Orders -->
                            
                        </div>
                    </div>
                       
                   </div>			
               </div>
               <!-- /Page Wrapper -->
    </div>
   </template>
   <script>
    import mentorlist from '../../assets/json/admin/AdminIndex/mentorlist.json'
    import menteelist from '../../assets/json/admin/AdminIndex/menteelist.json'
    import bookinglist from '../../assets/json/admin/AdminIndex/bookinglist.json'
    const images = require.context('../../assets/img/admin/profiles', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                mentorlist: mentorlist,
                menteelist: menteelist,
                bookinglist: bookinglist,
                barchartSeries: [
                    {
                        name: "Received",
                        type: "column",
                        data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50]
                    },
                    {
                        name: "Pending",
                        type: "column",
                        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80]
                    }
                ],
                barchartOptions: {
                    colors: ['#009da6', '#ff9c27'],
                    chart: {
                        type: 'bar',
                        fontFamily: 'Poppins, sans-serif',
                        height: 350,
                        toolbar: {
                            show: false
                        }
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '60%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    },
                    yaxis: {
                        title: {
                            text: '$ (thousands)'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                            return "$ " + val + " thousands"
                            }
                        }
                    }
                },
                piechartSeries: [55, 40, 20, 10],
                piechartOptions: {
                    colors: ['#009da6', '#ff737b', '#ff9c27', '#1ec1b0'],
                    chart: {
                        fontFamily: 'Poppins, sans-serif',
                        height: 290,
                        type: 'donut',
                    },
                    labels: ['Paid', 'Unpaid', 'Overdue', 'Draft'],
                    legend: {show: false},
                }
            }
	    },
        mounted() {
                $(document).on('click', '#toggle_btn', function() {
                    if($('body').hasClass('mini-sidebar')) {
                        $('body').removeClass('mini-sidebar');
                        $('.subdrop + ul').slideDown();
                    } else {
                        $('body').addClass('mini-sidebar');
                        $('.subdrop + ul').slideUp();
                    }
                    return false;
                });
                $(document).on('mouseover', function(e) {
                    e.stopPropagation();
                    if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                        var targ = $(e.target).closest('.sidebar').length;
                        if(targ) {
                            $('body').addClass('expand-menu');
                            $('.subdrop + ul').slideDown();
                        } else {
                            $('body').removeClass('expand-menu');
                            $('.subdrop + ul').slideUp();
                        }
                        return false;
                    }
                });
            },
            methods:{
                loadImg(imgPath) {
                    return images('./' + imgPath).default
                },
            }
        }   
</script>
   <style>
    .fa-users {
        font-size: 20px;
    }
    .fa-credit-card {
        font-size: 20px;
    }
    .fa-money {
        font-size: 20px;
    }
    .fa-folder {
        font-size: 20px;
    }
    .fa-star {
        font-size: 20px;
    }
    .menteee {
        font-size: 12px;
    }
</style>