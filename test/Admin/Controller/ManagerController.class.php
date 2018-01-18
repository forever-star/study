<?php
/**
 * Created by PhpStorm.
 * User: 17710
 * Date: 2018/1/16
 * Time: 17:47
 */

namespace Admin\Controller;
use Think\Controller;

class ManagerController extends controller{
    function login(){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        $this-> display();
    }

    function ddd(){
        $name = $_POST["admin_user"];
        if ($name == "郑永恒"){
            echo "你的用户名是".$name;
        }else{

            return false;
        }




    }


}
