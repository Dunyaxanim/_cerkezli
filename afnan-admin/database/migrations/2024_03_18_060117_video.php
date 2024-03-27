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
        Schema::create('videos', function (Blueprint $table) {
        $table->id();
        $table->string('img',300)->nullable();
        $table->boolean('status');
        $table->boolean('order')->default(0)->nullable();
        $table->string('url',500);
        $table->timestamps();
    });

        Schema::create('video_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_id')->references('id')->on('videos')->onDelete('cascade');
            $table->string('title', 200)->nullable();
            $table->text('desc')->nullable();
            $table->string('locale')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
        Schema::dropIfExists('video_translations');
    }
};
