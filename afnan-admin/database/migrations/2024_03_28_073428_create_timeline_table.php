<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('timelines', function (Blueprint $table) {
            $table->id();
            $table->string('img')->nullable();
            $table->unsignedBigInteger('timeline_category_id');
            $table->foreign('timeline_category_id')->references('id')->on('timeline_categories')->onDelete('cascade');
            $table->timestamps();
        });
        Schema::create('timeline_translations', function (Blueprint $table) {
            $table->id();
            $table->string('heading');
            $table->string('title');
            $table->longText('description');


            $table->foreignId('timeline_id')->references('id')->on('timelines')->onDelete('cascade');
            $table->string('locale')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timeline');
        Schema::dropIfExists('timeline_translations');
    }
};
