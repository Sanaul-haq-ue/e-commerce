<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return view('admin.order.index',[
            'orders' => Order::all()
        ]);
    }
    
    public function orderView($id)
    {
        return view('admin.order.orderView',[
            'order' => Order::find($id)
        ]);
    }

    public function orderEdit()
    {
        return view('admin.order.index',[
            'orders' => Order::all()
        ]);
    }

    public function orderDelete()
    {
        return view('admin.order.index',[
            'orders' => Order::all()
        ]);
    }
}
