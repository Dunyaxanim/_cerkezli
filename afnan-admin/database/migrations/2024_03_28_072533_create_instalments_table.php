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
        Schema::create('instalments', function (Blueprint $table) {
            $table->id();
            $table->string('img',300)->nullable();
            $table->boolean('status');
            $table->timestamps();
        });
        Schema::create('instalment_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('instalment_id');
            $table->foreign('instalment_id')->references('id')->on('instalments')->onDelete('cascade');
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
        Schema::dropIfExists('instalments');
         Schema::dropIfExists('instalment_translations');
    }
};
