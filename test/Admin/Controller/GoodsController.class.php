<?php
/**
 * Created by PhpStorm.
 * User: 17710
 * Date: 2018/1/16
 * Time: 17:47
 */

namespace Admin\Controller;
use Model\GoodsModel;
use Think\Controller;

class GoodsController extends controller{

    //展示商品
    function showlist(){

        //传入静态资源路径
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);

        //对goodsmodel进行操作;
        //实例化model对象
        $goods = new \Model\GoodsModel();
        $info = $goods->select();
        $this->assign('info',$info);

        $this-> display();
    }

    //添加商品
    function tianjia(){

        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);
        $goods = D('Goods');
        if (!empty($_POST)){

            $z = $goods->add($_POST);
            if ($z){
                $this ->redirect('showlist',array(),3,'商品添加成功');
            }else{
                $this ->redirect('add',array(),3,'商品添加失败');
            }
        }else{
            $this-> display();
        }

    }

    //添加商品
    function upd($goods_id){
        $this->assign('const_CSS',ADMIN_CSS);
        $this->assign('const_IMG',ADMIN_IMG);
        $goods = D('Goods');
        if (!empty($_POST)){

            $z = $goods->save($_POST);
            if ($z){
                $this ->redirect('showlist',array(),3,'商品修改成功');
            }else{
                $this ->redirect('upd',array(),3,'商品修改失败');
            }
        }else{
            $info = $goods->find($goods_id);
            $this ->assign('info',$info);
            $this-> display();
        }

//        $info = $goods->select($goods_id);

    }


}
