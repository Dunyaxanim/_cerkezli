<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->boolean('status');
            $table->integer('view_count')->default(0);
            $table->integer('like_count')->default(0);
            $table->string('img',300)->nullable();
            $table->string('img_hover',300)->nullable();
            $table->dateTime('publish_date')->default(now());
            $table->string('price')->default(0);
            $table->string('in_stock')->default(0)->nullable();
            $table->text('stock_code')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('product_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->string('name', 200);
            $table->string('slug');
            $table->text('text')->nullable();
            $table->string('slogan',600)->nullable();
            $table->string('payment_options',600)->nullable();
            $table->text('seo_title')->nullable();
            $table->text('seo_desc')->nullable();
            $table->text('seo_key')->nullable();
            $table->string('locale')->index();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_translations');
    }
};
