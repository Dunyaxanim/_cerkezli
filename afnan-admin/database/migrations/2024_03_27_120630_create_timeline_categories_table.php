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
        Schema::create('timeline_categories', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
        Schema::create('timeline_category_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('timeline_category_id')->references('id')->on('timeline_categories')->onDelete('cascade');
            $table->string('name');
            $table->string('locale')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timeline_categories');
        Schema::dropIfExists('timeline_categories_translations');
    }
};
