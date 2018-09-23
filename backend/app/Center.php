<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{

    protected $fillable = [
        'cen_name', 'cen_description', 'cen_email', 'cen_pno', 'cen_address',
    ];


    protected $hidden = [
        //
    ];
    
}
 