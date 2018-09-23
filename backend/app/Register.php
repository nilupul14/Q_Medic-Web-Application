<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'reg_name', 'reg_email', 'reg_password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
       
    ];
}
