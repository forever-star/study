<?php
/**
 * Created by PhpStorm.
 * User: 17710
 * Date: 2018/1/16
 * Time: 17:47
 */

namespace Admin\Controller;
use Think\Controller;

class IndexController extends controller{
    function index(){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        $this-> display();
    }
    function left(){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        $this-> display();
    }
    function head(){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        $this-> display();
    }
    function right(){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        $this-> display();
    }


}
