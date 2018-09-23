<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCentersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('centers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cen_name')->nullable();
            $table->string('cen_description')->nullable();
            $table->string('cen_email')->nullable();
            $table->string('cen_pno')->nullable();
            $table->string('cen_address')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('centers');
    }
}
