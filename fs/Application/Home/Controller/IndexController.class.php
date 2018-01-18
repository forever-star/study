<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){

        $this->assign('const_dist',DIST_PATH);
        $this->assign('const_build',BUILD_PATH);
        $this->assign('const_plugins',PLUGINS_PATH);
        $this->assign('const_bower',BOWER_PATH);

        $this-> display();
    }

    public function xiangdan(){
        $this->assign('const_dist',DIST_PATH);
        $this->assign('const_build',BUILD_PATH);
        $this->assign('const_plugins',PLUGINS_PATH);
        $this->assign('const_bower',BOWER_PATH);

        $this-> display();
    }

}