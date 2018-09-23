<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{

    protected $fillable = [
        'name', 'desc', 'address', 'email'
    ];

    protected $hidden = [
       //
    ];
}
