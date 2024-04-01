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
        Schema::create('metaverse', function (Blueprint $table) {
            $table->id();
            $table->string('img',300)->nullable();
            $table->boolean('status');
            $table->timestamps();
        });
        Schema::create('metaverse_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('metaverse_id');
            $table->foreign('metaverse_id')->references('id')->on('metaverse')->onDelete('cascade');
            $table->string('heading', 80);
            $table->string('title')->nullable();
            $table->text('desc')->nullable();
            $table->text('content')->nullable();
            $table->string('locale')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metaverse');
        Schema::dropIfExists('metaverse_translations');
    }
};
