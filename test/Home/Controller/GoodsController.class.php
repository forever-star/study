<?php
namespace Home\Controller;
use Think\Controller;
class GoodsController extends Controller {

    //展示商品列表
    public function showlist(){

        $this->assign('const_CSS',CSS_URL);
        $this->assign('const_IMG',IMG_URL);

        $this-> display();

    }

    //展示商品详情
    public function detail(){

        $this-> display();

    }
}